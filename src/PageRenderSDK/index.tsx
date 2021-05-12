import React  from 'react'
import { componentMap } from 'piggy-components';

const PageRenderSDK = (props: any) => {
  const { list } = props
  // 递归渲染组件
  const renderComponent = (arr: any) => {
    return (
      arr?.map((item: any) => {
        const Component = componentMap[item.name]
        if (!item.children) {

          return (
            <Component
              {...item.attr}
              key={item.id}
            />
          )
        }
        return (
            <Component
              key={item.id}
              {...item.attr}
            >
              {renderComponent(item.children)}
            </Component>
        )
      })
    )
  }


  return (
    <div style={{width: '100%', boxSizing:'border-box'}}>
      {renderComponent(list) || null}
    </div>
  )
}

export default PageRenderSDK