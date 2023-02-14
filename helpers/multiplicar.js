const fs = require("fs");
const colors = require("colors");

const createFile = (base = 1, listar = false, hasta=9) => {
	return new Promise((resolve, reject) => {
		try {
			let salida = "";
			let consola = "";
			for (let i = 1; i <= hasta; i++) {
				salida += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
				consola += `${base} x ${i} = ${base * i}\n`;
			}

			if (listar) {
				console.log(colors.red("================"));
				console.log(colors.blue(`Table del ${base}:`));
				console.log(colors.red("================"));
				console.log(salida);
			}

			fs.writeFileSync(`./salida/table-${base}.txt`, salida);

			resolve(`Table del ${base} generado`);
		} catch (error) {
			reject(error);
			// throw error
		}
	});
};

module.exports = {
	createFile,
};
