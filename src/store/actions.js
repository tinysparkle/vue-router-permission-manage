import { getUserRouters } from "@/api";
import { formatRouterTree } from '@/utils'
export default {
    async setUserRouters({commit, state}) {
        const res = await getUserRouters(state.uid)
        // 将处理后的树形结构数组放入vuex中
        const userRouters = formatRouterTree(res)
        commit('SET_USER_ROUTERS', userRouters)
        commit('SET_AUTH', true)
    }
}