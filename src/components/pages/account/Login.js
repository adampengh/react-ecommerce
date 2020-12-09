import React from 'react';

// Atoms
import { FormField, InputField } from '../../atoms/Forms';
import PageTitle from '../../atoms/PageTitle';

export default class Login extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return(
            <main className="container login">
                <PageTitle title="Login" />
                <div className="row">
                    {/* New Users */}
                    <div className="col col-md-2 create-account">
                        <h3>Create New Account</h3>
                        <form>
                            <FormField>
                                <InputField
                                    id="firstName"
                                    label="First Name"
                                    required
                                    type="text" />
                            </FormField>
                            <FormField>
                                <InputField
                                    id="lastName"
                                    label="Last Name"
                                    required
                                    type="text" />
                            </FormField>
                            <FormField>
                                <InputField
                                    id="email"
                                    label="Email"
                                    required
                                    type="email" />
                            </FormField>
                        </form>
                    </div>

                    {/* Returning Users */}
                    <div className="col-1 col-md-2 returning-user">
                        <h3>Returning Users</h3>
                        <form>
                            <FormField>
                                <InputField
                                    id="email"
                                    label="Email"
                                    type="email" />
                            </FormField>
                            <FormField>
                                <InputField
                                    id="password"
                                    label="Password"
                                    type="password" />
                            </FormField>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}
