import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  try {
    const { data, error } = await supabase
      .from('guest')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}) 