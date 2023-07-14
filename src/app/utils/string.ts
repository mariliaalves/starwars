export default abstract class StringUtils {
    static extractIdFromUrl(url: string){
        return url.split('/').filter(el => Number.parseInt(el))[0]
    }
}