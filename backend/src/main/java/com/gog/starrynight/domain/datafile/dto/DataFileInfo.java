package com.gog.starrynight.domain.datafile.dto;

import com.gog.starrynight.common.util.UriUtil;
import com.gog.starrynight.domain.datafile.entity.DataFile;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Data
@NoArgsConstructor
public class DataFileInfo {
    private Long id;
    private String originalFileName;
    private String url;

    public DataFileInfo(DataFile dataFile) {
        this.id = dataFile.getId();
        this.originalFileName = dataFile.getOriginalFileName();
        this.url = UriUtil.buildUri("/datafiles/" + this.id.toString());
    }
}
