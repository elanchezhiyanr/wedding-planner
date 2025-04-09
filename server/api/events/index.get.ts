import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  try {
    const { data, error } = await supabase
      .from('event')
      .select('*')
      .order('event_date', { ascending: true })

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}) 