import { prop } from '@hasezoey/typegoose'

export class Post {
  @prop() 
  title: string
  @prop()
  content: string
}