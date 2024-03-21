const beautifyButton = document.getElementById("btn");
const codeInput = document.getElementById("codeIp");
const codeOutput = document.getElementById("codeOp");

beautifyButton.addEventListener("click", () => {
    const inputCode = codeInput.value;
    const beautifiedCode = js_beautify(inputCode, { indent_size: 2, brace_style: "collapse" });
    codeOutput.textContent = beautifiedCode;
});
function copy(){
    let text=document.getElementById("codeOp");
    text.select();
    document.execCommand("copy");
}
