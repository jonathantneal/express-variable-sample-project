function $(name, props, ...children) {
	const $element = name === $ ? document.createDocumentFragment() : document.createElement(name);

	for (const prop in props) {
		if (/^on/.test(prop)) {
			$element.addEventListener(prop.slice(2), props[prop]);
		} else {
			$element.setAttribute(prop, props[prop]);
		}
	}

	for (const $child of children) {
		$element.append($child);
	}

	return $element;
};
