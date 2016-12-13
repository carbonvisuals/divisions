var debug = {
	on: false,
	trace: true,
};

debug.dbg = function (string) {
	if (this.on) console.log("[DEBUG] "+string+"%c"+this.getLine(new Error), "color: #bbbbbb");
}

debug.log = function (string) {
	console.log("%c[LOG] "+string+"%c"+this.getLine(new Error), "color: #06a800", "color: #bbbbbb");
}

debug.sentinel = function (string, bool) {

	if (!bool) {
		console.log("%c[ERROR] "+string+"%c"+this.getLine(new Error), "color: #ff6600", "color: #bbbbbb");
		return true;
	}
	else {
		return false;
	}
}

debug.check = function (string, bool) {

	if (!bool) {
		throw new Error(string+this.getLine(new Error));
		return true;
	}
	else {
		return false;
	}
}

debug.getLine = function (err) {
	if (this.trace && err && err.stack) return "\n\n"+err.stack.split("\n")[1];
	else return "";
}