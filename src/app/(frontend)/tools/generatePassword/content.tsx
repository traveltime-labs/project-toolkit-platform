"use client"
import {useGeneratePasswordState} from "./useGeneratePasswordState";
import Content from '@/components/frontend/content';
import {Button} from '@/components/ui/button';

const generatePasswordPage = () => {
    const { len, setLength, code, handleGenerate } = useGeneratePasswordState();
    /**
     * 後續調整可選：
     * 包含大寫字母
     * 包含數字
     * 包含小寫字母
     * 包含特殊符號
     * 
     * 密碼長度 捲動
     * 密碼強度顯示
     */
    return (
        <Content title="隨機密碼產生器">
            <div className="border-2 bg-gray-200 rounded-2xl p-4">
                <div className="flex justify-between">
                    <span className="text-sm text-gray-600">生成的密碼</span>
                    <span className="text-sm text-gray-600">幾位數: {len}</span>
                </div>
                <div className="bg-black/70 rounded-lg"> {code ? code : "尚未生成"} </div>
            </div>
            <div>
                <input id="len" type="text" min="1" 
                  className="p-2 bg-black/5 text-white"
                  value={len} 
                  onChange={e => setLength(Number(e.target.value))} />
            </div>
            <div>
                
            </div>
            <div className="flex justify-between my-3">
                <Button className="" onClick={handleGenerate}>生成新密碼</Button>
                <Button className="">複製密碼</Button>
            </div>
        </Content>
    )
}

export default generatePasswordPage;