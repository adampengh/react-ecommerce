import React from 'react';

import PageTitle from '../atoms/PageTitle';

export default class Cart extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        console.log(this.state);
        return(
            <main className="container">
                <PageTitle title="Shopping Cart" />
            </main>
        )
    }
}
