package com.cupk.snapshot.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cupk.snapshot.domain.entity.Goods;
import com.cupk.snapshot.service.GoodsService;
import com.cupk.snapshot.mapper.GoodsMapper;
import org.springframework.stereotype.Service;

/**
* @author User
* @description 针对表【wfssp_goods】的数据库操作Service实现
* @createDate 2023-06-13 14:11:08
*/
@Service
public class GoodsServiceImpl extends ServiceImpl<GoodsMapper, Goods>
    implements GoodsService{

}



