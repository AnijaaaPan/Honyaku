export default class TextColorManager {
  public static colorText(text: string, colorCode: number) {
    return `[2;${colorCode}m${text}[0m`
  }

  public static colorGray(text: string) {
    return TextColorManager.colorText(text, 30)
  }

  public static colorRed(text: string) {
    return TextColorManager.colorText(text, 31)
  }

  public static colorYellow(text: string) {
    return TextColorManager.colorText(text, 32)
  }

  public static colorOrange(text: string) {
    return TextColorManager.colorText(text, 33)
  }

  public static colorBlue(text: string) {
    return TextColorManager.colorText(text, 34)
  }

  public static colorPink(text: string) {
    return TextColorManager.colorText(text, 35)
  }

  public static colorGreen(text: string) {
    return TextColorManager.colorText(text, 36)
  }

  public static colorWhite(text: string) {
    return TextColorManager.colorText(text, 37)
  }
}