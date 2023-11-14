import { Controller } from "@nestjs/common";
import { AchievementRepository } from "src/modules/achievement/achievement.repository";
import { FriendsRepository } from "src/modules/friends/friends.repository";
import { MatchesRepository } from "src/modules/matches/matches.repository";
import { FileService } from "src/modules/readfile/readfile";
import { UsersRepository } from "src/modules/users/users.repository";

@Controller('leaderboard')
export class LeaderboardController {
    constructor (private user: UsersRepository,
                 private achievement: AchievementRepository,
                 private match: MatchesRepository,
                 private file : FileService,
                 private friend: FriendsRepository)
                {}
    }
    