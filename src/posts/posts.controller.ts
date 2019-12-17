import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { get } from 'http';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './posts.model';

class CreatePostDto {
  @ApiProperty({ description: '文章标题',example: '文章标题示例' })
  title: string
  @ApiProperty({ description: '文章内容', example: '文章内容示例' })
  content: string
}

@Controller('posts')
@ApiTags('文章')
export class PostsController {

  @Get()
  @ApiOperation({ summary: '文章列表'})
  async index() {
    return await PostModel.find()
  }

  @Post()
  @ApiOperation({ summary: '创建文章' })
  async create(@Body() createpostdto: CreatePostDto) {
    await PostModel.create(createpostdto)
    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '文章详情' })
  async detail(@Param('id') id: string) {
    return await PostModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑文章' })
  async update(@Param('id') id: string, @Body() updatepostdto: CreatePostDto) {
    await PostModel.findByIdAndUpdate(id, updatepostdto)
    return {
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  async remove(@Param('id') id: string) {
    await PostModel.findByIdAndDelete(id)
    return {
      success: true
    }
  }

}
