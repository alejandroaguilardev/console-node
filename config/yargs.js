const argv = require("yargs")
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe:"Es la base de multiplicar"
	})
	.option("l", {
		alias: "listar",
		type: "boolean",
        default:false,
		describe:"Lista en consola"

	})
	.option("h", {
		alias: "hasta",
		type: "number",
        default:9,
		describe:"Especifica hasta que table se multiplica"

	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw "La base tiene que ser un numero";
		}
        return true;
	}).argv;

	module.exports =argv;