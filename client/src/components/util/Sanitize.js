const Sanitize = (input) => {
    const escapeInput = (input) => {
        let map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39'
        }

        return input.replace(/[&<>"']/g, (c) => { return map[c]; });
    }

    let output = escapeInput(input);

    return output;
}

export default Sanitize;