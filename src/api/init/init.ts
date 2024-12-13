import request from "../request.ts";
import {MenuItem} from "../../stores/MenuStore.ts";
interface GetMenuResponse {
    code: number;
    msg: string;
    data: Array<MenuItem>; // 假设返回的数据是一个 JSON 字符串，包含菜单项
}

// 定义 GetMenuList 函数，返回类型为 GetMenuResponse
export const GetMenuList = async (): Promise<GetMenuResponse> => {
    return await request({
        url: '/api/init/GetMenuList',
        method: 'get'
    })
};