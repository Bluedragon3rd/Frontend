// utils/auth.ts
const STORAGE_KEY = "user_custom_id";

export const getOrCreateCustomId = () => {
  let id = localStorage.getItem(STORAGE_KEY);

  if (!id) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";

    let part1 = "";
    let part2 = "";

    for (let i = 0; i < 4; i++) {
      part1 += chars[Math.floor(Math.random() * chars.length)];
      part2 += nums[Math.floor(Math.random() * nums.length)];
    }

    id = `${part1}-${part2}`;
    localStorage.setItem(STORAGE_KEY, id);
  }

  return id;
};

export const clearCustomId = () => {
  localStorage.removeItem(STORAGE_KEY);
};
