import * as path from "path";
import { glob } from "glob";
import Mocha from "mocha";

export function run(
	testsRoot: string,
	cb: (error: any, failures?: number) => void,
): void {
	// Create the mocha test
	const mocha = new Mocha({
		ui: "tdd",
		color: true,
	});

	glob("**/**.test.js", { cwd: testsRoot }).then(
		(files) => {
			// Add files to the test suite
			files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

			try {
				// Run the mocha test
				mocha.run((failures) => {
					cb(null, failures);
				});
			} catch (err) {
				cb(err);
			}
		},
		(err) => {
			if (err) {
				return cb(err);
			}
		},
	);
}
