var bcrypt = require('bcryptjs');
module.exports = {
    inputs:{
        emailAddress: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        confirmPassword: {
            type: 'string',
        },
        fullName: {
            type: 'string',
        },
    },
    exits:{
        success: {
            viewTemplatePath: 'account/signup'
        }
    },

    fn: async function(inputs) {
        if (inputs.password == inputs.confirmPassword) {
        var user = await User.create({fullName: inputs.fullName, password: await bcrypt.hash(inputs.password, 12), emailAddress: inputs.emailAddress});
        this.res.redirect('/');
        // console.log(user)
         } else {
        //     // var error = "Password does not match"
        //     // res.status(406)
        //     // return res.view('account/signup', {data: error });
        // //     this.req.send('account/signup')
        // // return {}
        return this.res.passwordsNotMatch("Passwords not Match")
         }
    }
}