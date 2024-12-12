// stores/MenuStore.ts
import { defineStore } from 'pinia';

// 定义菜单项的类型
interface MenuItem {
    id: number;
    menuName: string;
    path: string;
}

const useMenuStore = defineStore({
    id: 'menuStore',
    state: () => ({
        menuList: [] as MenuItem[], // 使用 `MenuItem[]` 来定义 `menuList` 的类型
    }),
    actions: {
        setMenuList(menuList: MenuItem[]) { // 使用 `MenuItem[]` 来定义 `setMenuList` 参数的类型
            this.menuList = menuList;
        },
        addMenu(item: MenuItem) { // `item` 类型为 `MenuItem`
            this.menuList.push(item);
        },
    },
});

export {
    type MenuItem,
    useMenuStore,
}