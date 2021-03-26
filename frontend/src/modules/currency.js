const Currency = {};


/**
 * Regex & separator definitions.
 * NB: These regexs must match things like $1,323.00 -- i.e things that
 * still have a thousands separator in them -- since the thousands
 * separator is only stripped out after the pattern is matched.
 *
 * @constant
 * @type {!RegExp}
 */
const US_PRICE_RGX = /\$[\s\u00a0]*([\d,]*\.\d\d)/;


/**
 * @constant
 * @type {string}
 */
const US_THOUSANDS_SEP = ',';


/**
 * Regex to format currency from "1000" template. Example: "$1,000.00" or "EUR 1.000".
 *
 * @constant
 * @type {!RegExp}
 */
const PRICE_TEMPLATE_REGEX = /1([^\d])?0{3}(?:([^\d])?(0+))?/;



/**
 * Takes a string. Returns a string containing the first price found.
 *
 * @param {string} s The string to search for the price.
 * @param {RegExp} [opt_rgx] Optional price regexp to use.
 * @param {string} [opt_thousandsSep] Optional separator to mc.util.strip out.
 * @returns {?string} The first price found or null if one could not be found.
 */
Currency.getPrice = function (s, opt_rgx, opt_thousandsSep) {
    const rgx = opt_rgx || US_PRICE_RGX;
    const thousandsSep = opt_thousandsSep || US_THOUSANDS_SEP;
    const m = s.match(rgx);
    if (thousandsSep === ',') {
        return m ? m[1].replace(thousandsSep, '') : null;
    } else {
        // Make . the decimal point, not ,
        return m ? m[1].replace(thousandsSep, '').replace(',', '.') : null;
    }
};


/**
 * Return string with comma after every 3 from the right generally used on a
 * string representation of an integer.
 *
 * @param {string} i A string to insert commas into.
 * @param {string} [opt_character] Optionally, insert another character in place of a comma.
 * @returns {string} The given string with a comma inserted after every three
 *     characters from the right.
 */
Currency.insertCommas = function (i, opt_character) {
    return i.replace(/([\s\S])(?=([\s\S]{3})+$)/g, '$1' + (opt_character || ','));
};


/**
 * Format a price give a template of 1,000. Supports currency symbols before or after, comma separators,
 * and any number of decimal places. Example: "$1,000.00" or "EUR 1.000,00".
 *
 * DEFAULT if there is no format for that currency in mc.util.currencies_.
 *
 * @param {!number|!string} value  Amount.
 *
 * @returns {string} The value, formatted.
 */
Currency.formatCurrency = function (value) {
    // It's being done this way so it checks in this order;
    // Has a custom format been provided? if not, do we have a format for their account currency?
    // No? Default to dollar format - $1,000.00
    const currency = {
        thousandsSeperator: ',',
        decimalSeperator: '.',
        numDecimals: 2,
        strFormat: '$1,000.00'
    };

    return _formatCurrency(currency.thousandsSeperator, currency.decimalSeperator, currency.numDecimals,
        currency.strFormat, value.toString());
};


/**
 * A private function to be used with Function.prototype.bind for cached currency formats.
 *
 * @private
 * @param  {!string} thousandsSeperator  Symbol to use to splitting grousp of 3 numbers (above 0)
 * @param  {!string} decimalSeperator    Symbol to use as the decimal separator
 * @param  {!number} numDecimals         Number of decimals
 * @param  {!string} strFormat           Format (used for before/after text, smybols, etc)
 * @param  {string} value       Value to be converted into this format.
 * @returns {!string} The given value formatted.
 */
const _formatCurrency = function (thousandsSeperator, decimalSeperator, numDecimals, strFormat, value) {
    value = parseFloat(value).toFixed(numDecimals);

    var negative = value.indexOf('-') === 0 ? '-' : '';
    if (negative) {
        value = value.substr(1);
    }

    var split = value.split('.');

    split[0] = Currency.insertCommas(split[0], thousandsSeperator);
    split[1] = split[1] && split[1].slice(0, numDecimals);

    value = split.join(decimalSeperator);

    return negative + strFormat.replace(PRICE_TEMPLATE_REGEX, value);
};


/**
 * @param {!number|!string} originalPrice Original price.
 * @param {!number|!string} salePrice Sale Price.
 * @param {number=} opt_decimalPrecision Number of decimal places to return
 * @returns {string} The value, formatted.
 */
Currency.percentDiscount = (originalPrice, salePrice, opt_decimalPrecision) => {
    originalPrice = parseInt(originalPrice);
    salePrice = parseInt(salePrice);

    let percent = (originalPrice - salePrice) / originalPrice * 100;
    if (opt_decimalPrecision) {
        percent = percent.toFixed(opt_decimalPrecision);
    } else {
        percent = Math.floor(percent);
    }
    return `${percent}%`;
};




export default Currency;
