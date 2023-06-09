package com.gog.starrynight.domain.achievement.repository;

import com.gog.starrynight.domain.achievement.entity.Achievement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AchievementRepository extends JpaRepository<Achievement, Long> {
    Optional<Achievement> findByName(String name);

    @Query("SELECT COUNT(a) FROM Achievement a")
    int getTotalAchievementCount();
}
