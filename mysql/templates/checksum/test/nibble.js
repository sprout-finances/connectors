module.exports = {
	body: {
		session: {},
		settings: {
			table: "f_lead",
			id_column: "id"
		},
		data: {
			reverse: true,
			start: 1,
			end: 999999999999,
			limit: 100
		}
	},
	params: {
		querystring: {
			method: "nibble"
		}
	}
};
