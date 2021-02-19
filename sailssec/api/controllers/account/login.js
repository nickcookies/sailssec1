var bcrypt = require('bcryptjs');
module.exports = {

    inputs: {
        username: {type: 'string', required: true},
        password: {type: 'string', required: true}
    },

    exits: {},

    fn: async function(inputs){
        console.log("inputs.password=" + await bcrypt.hash(inputs.password, 12))
        let user = await User.findOne({emailAddress: inputs.username})//, password: await bcrypt.hash(inputs.password, 12)})
        console.log("db____.password=" + user.password)
        if(user !== undefined) {
            this.req.me = user;
            this.req.session.userId = user.id
            return this.res.view('account/controlpanel')
        } else {
            this.res.statusCode = 403
            return this.res.forbidden()
        }
    }
}