import { ResolveFn } from '@angular/router';
import {LEADERBOARD_ROUTES_PARAMS} from "../../../leaderboard.routes";

export const teamNameResolver: ResolveFn<string | null> = (route, state) => {
  const teamName = route.paramMap.get(LEADERBOARD_ROUTES_PARAMS.teamName.param);
  if(!teamName) {
    return null;
  }
  return teamName;
};
