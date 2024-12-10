// api/init/init.ts
interface GetMenuResponse {
    code: number;
    msg: string;
    data: string; // 假设返回的数据是一个 JSON 字符串，包含菜单项
}

// 定义 GetMenuList 函数，返回类型为 GetMenuResponse
export const GetMenuList = async (): Promise<GetMenuResponse> => {
    // 模拟 API 请求
    const response = await fetch('/api/menu'); // 假设这是菜单 API
    return await response.json(); // 返回菜单数据
};