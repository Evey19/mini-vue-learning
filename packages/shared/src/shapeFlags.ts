export const enum ShapeFlags {
  ELEMENT = 1,// element类型
  STATEFUL_COMPONENT = 1 << 2,// 组件类型
  TEXT_CHILDREN = 1 << 3,// vnode的children为string类型
  ARRAY_CHILDREN = 1 << 4,// vnode的children为数组类型
  SLOTS_CHILDREN = 1 << 5// vnode的children为slots类型
}