import type { Tag } from './Tag'
import type { Title } from './Title'
import type { WatchableType } from './WatchableType'

export interface Watchable {
  type: WatchableType,
  season?: number,
  episode?: number | string,
  tags: Tag[],
  title: Title
}
