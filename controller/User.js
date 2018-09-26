const User = require("../model/user");

module.exports = {
	registerUser: async (req, res) => {
		const { name, email, photoUrl } = req.body;

		try {

			let user = await User.findOne({
				email
			});
			if (user)
				return res.status(200).json({
					user
				});
			else {
				const newUser = new User({
					name,
					email,
					photoUrl
				});
				try {
					const newuser = await newUser.save();
					return res.status(200).json({
						user: newuser
					});

				} catch (err) {
					if (err)
						return res.status(403).send({
							error: err.errmsg
						});
				}
			}

		}
		catch (err) {
			if (err)
				return res.status(403).send({
					error: err.errmsg
				});
		}
	}
};