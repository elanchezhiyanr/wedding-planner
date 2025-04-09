import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { group_name, primary_contact_guest_id } = body

    const { data, error } = await supabase
      .from('group_table')
      .insert([
        {
          group_name,
          primary_contact_guest_id
        }
      ])
      .select()

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}) 