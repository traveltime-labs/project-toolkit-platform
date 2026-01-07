"use client"
import {useRandomPwdState} from "./useRandomPwdState";

const randomPwd = () => {
    const { len, setLength, code, handleGenerate } = useRandomPwdState();

    return (
        <div>
            <h2>隨機密碼產生器</h2>
            <div className="border-2 bg-gray-200">
                <div>
                <span>生成的密碼</span>
                <span>幾位數: {len}</span>
                </div>
                <div> {code} </div>
            </div>
            <div>
            <input id="len" type="text" min="1" 
                  className="p-2 bg-black/5 text-white"
                  value={len} 
                  onChange={e => setLength(Number(e.target.value))} />
                <button onClick={handleGenerate}>產生</button>
            </div>
            <div>
                
            </div>
            <div>
                <button className="bg-purple-200">生成新密碼</button>
                <button>複製密碼</button>
            </div>
        </div>
    )
}

export default randomPwd;