// 处理路由表为树形结构
export function formatRouterTree(data) {
    let parents = data.filter(p => p.pid === 0);
    let children = data.filter(c => c.pid !== 0);

    toTreeData(parents, children)

    // 递归处理
    function toTreeData(parents, children) {
       parents.map(p => {
           children.map((c,i) => {
               if(c.pid === p.id) {
                   let _c = JSON.parse(JSON.stringify(children))
                   _c.splice(i, 1)
                   toTreeData([c], _c)
                   if(p.children) {
                       p.children.push(c)
                   }else {
                       p.children = [c]
                   }
               }
           })
       })
    }   
    return parents  
}

export function generateRouter(userRouters) {
    const newRouters = userRouters.map(r => {
        const routes = {
            path: r.path,
            name: r.name,
            component: () => import(`@/views/${r.name}`),
            meta: {
                title: r.title
            }
        }
        if(r.children) {
            routes.children = generateRouter(r.children)
        }

        return routes
    })

    return newRouters
}