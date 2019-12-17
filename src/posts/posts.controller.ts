import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema} from './posts.model'

class CreatePostDto {
  @ApiProperty({ description: '文章标题',example: '文章标题示例' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string
  @ApiProperty({ description: '文章内容', example: '文章内容示例' })
  content: string
}

@Controller('posts')
@ApiTags('文章')
export class PostsController {

  constructor(
    @InjectModel(PostSchema) private readonly postModel
  ) {}

  @Get()
  @ApiOperation({ summary: '文章列表'})
  async index() {
    return await this.postModel.find()
  }

  @Post()
  @ApiOperation({ summary: '创建文章' })
  async create(@Body() createpostdto: CreatePostDto) {
    await this.postModel.create(createpostdto)
    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '文章详情' })
  async detail(@Param('id') id: string) {
    return await this.postModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑文章' })
  async update(@Param('id') id: string, @Body() updatepostdto: CreatePostDto) {
    await this.postModel.findByIdAndUpdate(id, updatepostdto)
    return {
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  async remove(@Param('id') id: string) {
    await this.postModel.findByIdAndDelete(id)
    return {
      success: true
    }
  }

}
