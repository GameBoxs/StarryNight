package com.gog.starrynight.domain.post_image.controller;

import com.gog.starrynight.domain.post_image.service.PostImageService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "게시물 이미지 관리")
@RestController
@RequiredArgsConstructor
public class PostImageController {
    private final PostImageService postImageService;
}
