import { Controller, Get } from "@nestjs/common";
import { UserDto } from "src/DTOs/User/user.dto";
import { UserData } from "src/DTOs/User/user.profileData";
import { LeaderboardDto } from "src/DTOs/leaderboard/leaderboard.dto";
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
                 private friend: FriendsRepository) {}
    
                @Get()
                async getLeaderboard() : Promise<any> {
                    let users: UserDto[] = await this.user.getAllUsers()
                    console.log(users);
                    let leaderboard : LeaderboardDto[] = []
                    users.forEach( (user)=> {leaderboard.push({
                        username: user.username,
                        avatar: user.avatar,
                        achievements : user.achievements,
                        rank : 0,
                        level : 0
                    })})
                    return (leaderboard)
                }
}