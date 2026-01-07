"use client"
import { useJsonState } from "./useJsonState";

const randomPwd = () => {
    const { input,
        setInput,
        output,
        setOutput,
        vaildate,
        setValidate,
        copyJSON,
        formtJSON,
        minifyJSON,
        validateJSON } = useJsonState();

    return (
        <div>
            JSON 格式化/壓縮
            <div>
                <button onClick={minifyJSON}>壓縮</button>
                <button onClick={formtJSON}>格式化</button>
                <button onClick={validateJSON}>驗證</button>
            </div>
            <div>
                輸入:<br />
                <textarea name="" id="" 
                    value={input} onChange={e => setInput(e.target.value)}></textarea>
            </div>
            <div> {vaildate} </div>
            <div>
                輸出:
                <button onClick={copyJSON}>拷貝</button><br />
                <textarea name="" 
                    value={output}
                    onChange={e => setOutput(e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}

export default randomPwd;


