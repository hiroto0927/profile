/**
 * 生年月日から現在の年齢を計算する
 * @param birthDate - 生年月日 (YYYY-MM-DD形式)
 * @param timezone - タイムゾーン (デフォルト: "Asia/Tokyo")
 * @returns 現在の年齢
 */
export function calculateAge(
  birthDate: string,
  timezone: string = "Asia/Tokyo"
): number {
  const birth = new Date(birthDate);
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: timezone })
  );

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  // 誕生日がまだ来ていない場合は年齢を1減らす
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}
