export const useTagStore = defineStore('tagStore', () => {
  const top20Tags = ref([])
  /**
   * 取得所有/熱門標籤
   * @param { "all" | "hot" } type 指定標籤類型資料：all 全部、hot 熱門
   * @param { number } limit 資料筆數
   * @param { string } q 搜尋標籤名稱
   * @returns api 資料
   */
  const getTags = async (type, limit, q) => {
    console.log(type, limit, q)
    const { data } = await useFetch('/api/tags')
    const { tags } = data.value
    tags.sort((a, b) => b.eventNum - a.eventNum)
    top20Tags.value = tags.slice(0, 20)
    return tags
  }

  return {
    top20Tags,
    getTags
  }
})