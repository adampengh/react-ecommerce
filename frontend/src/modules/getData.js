export default async function getData(params) {
    await fetch(`http://localhost:4000/products/${params ? `?${params}` : ''}`);
}
