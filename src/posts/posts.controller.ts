import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { get } from 'http';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: '文章标题' })
  title: string
  @ApiProperty({ description: '文章内容' })
  content: string
}

@Controller('posts')
@ApiTags('文章')
export class PostsController {

  @Get()
  @ApiOperation({ summary: '显示文章列表'})
  index() {
    return []
  }

  @Post()
  @ApiOperation({ summary: '创建文章' })
  create(@Body() body: CreatePostDto) {

    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '文章详情' })
  detail(@Param('id') id: string) {
    return {
      id: id,
    }
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑文章' })
  update(@Param('id') id: string, @Body() body: CreatePostDto) {
    return {
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  remove(@Param('id') id: string) {
    return {
      success: true
    }
  }

}
