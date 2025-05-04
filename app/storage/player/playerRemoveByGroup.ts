import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(group: string, playerName: string) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const filteredPlayers = storedPlayers.filter(
      (player) => player.name !== playerName
    );

    const storage = JSON.stringify(filteredPlayers);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
