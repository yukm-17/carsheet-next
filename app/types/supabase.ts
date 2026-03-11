export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      crawl_jobs: {
        Row: {
          config: Json | null
          finished_at: string | null
          id: string
          source_site: string | null
          started_at: string | null
          status: Database["public"]["Enums"]["crawl_job_status"] | null
        }
        Insert: {
          config?: Json | null
          finished_at?: string | null
          id?: string
          source_site?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["crawl_job_status"] | null
        }
        Update: {
          config?: Json | null
          finished_at?: string | null
          id?: string
          source_site?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["crawl_job_status"] | null
        }
        Relationships: []
      }
      images: {
        Row: {
          crawl_job_id: string | null
          created_at: string
          id: string
          image_hash: string | null
          image_status: string | null
          image_url: string
          is_primary: boolean
          license_type: string | null
          source_site: string
          vehicle_id: string | null
        }
        Insert: {
          crawl_job_id?: string | null
          created_at?: string
          id?: string
          image_hash?: string | null
          image_status?: string | null
          image_url: string
          is_primary?: boolean
          license_type?: string | null
          source_site: string
          vehicle_id?: string | null
        }
        Update: {
          crawl_job_id?: string | null
          created_at?: string
          id?: string
          image_hash?: string | null
          image_status?: string | null
          image_url?: string
          is_primary?: boolean
          license_type?: string | null
          source_site?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_images_crawl_job_id_fkey"
            columns: ["crawl_job_id"]
            isOneToOne: false
            referencedRelation: "crawl_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicles_images_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vechicle_common"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicles_images_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicle_with_image"
            referencedColumns: ["id"]
          },
        ]
      }
      images_logs: {
        Row: {
          crawl_job_id: string | null
          created_at: string
          error_code: Database["public"]["Enums"]["image_error_code"] | null
          id: string
          image_id: string | null
          level: string | null
          message: string | null
        }
        Insert: {
          crawl_job_id?: string | null
          created_at?: string
          error_code?: Database["public"]["Enums"]["image_error_code"] | null
          id?: string
          image_id?: string | null
          level?: string | null
          message?: string | null
        }
        Update: {
          crawl_job_id?: string | null
          created_at?: string
          error_code?: Database["public"]["Enums"]["image_error_code"] | null
          id?: string
          image_id?: string | null
          level?: string | null
          message?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_images_logs_crawl_job_id_fkey"
            columns: ["crawl_job_id"]
            isOneToOne: false
            referencedRelation: "crawl_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicles_images_logs_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
        ]
      }
      vechicle_common: {
        Row: {
          body_type: string | null
          brand: string | null
          crawl_job_id: string | null
          created_at: string
          engine_type: string | null
          external_id: string | null
          fuel_type: string | null
          id: string
          main_image_id: string | null
          model: string | null
          price: number | null
          series: string | null
          source_site: string | null
          specs: Json | null
          tracking_raw_json: Json | null
          transmission: string | null
          updated_at: string | null
          year: number | null
        }
        Insert: {
          body_type?: string | null
          brand?: string | null
          crawl_job_id?: string | null
          created_at?: string
          engine_type?: string | null
          external_id?: string | null
          fuel_type?: string | null
          id?: string
          main_image_id?: string | null
          model?: string | null
          price?: number | null
          series?: string | null
          source_site?: string | null
          specs?: Json | null
          tracking_raw_json?: Json | null
          transmission?: string | null
          updated_at?: string | null
          year?: number | null
        }
        Update: {
          body_type?: string | null
          brand?: string | null
          crawl_job_id?: string | null
          created_at?: string
          engine_type?: string | null
          external_id?: string | null
          fuel_type?: string | null
          id?: string
          main_image_id?: string | null
          model?: string | null
          price?: number | null
          series?: string | null
          source_site?: string | null
          specs?: Json | null
          tracking_raw_json?: Json | null
          transmission?: string | null
          updated_at?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vechicle_common_main_image_id_fkey"
            columns: ["main_image_id"]
            isOneToOne: true
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vechicles_common_crawl_job_id_fkey"
            columns: ["crawl_job_id"]
            isOneToOne: false
            referencedRelation: "crawl_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      vehicle_with_image: {
        Row: {
          body_type: string | null
          brand: string | null
          engine_type: string | null
          fuel_type: string | null
          id: string | null
          image_url: string | null
          model: string | null
          price: number | null
          series: string | null
          specs: Json | null
          transmission: string | null
          year: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      crawl_job_status: "running" | "finished" | "failed"
      image_error_code:
        | "network_error"
        | "timeout"
        | "http_403"
        | "robots_blocked"
        | "license_rejected"
        | "invalid_image"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      crawl_job_status: ["running", "finished", "failed"],
      image_error_code: [
        "network_error",
        "timeout",
        "http_403",
        "robots_blocked",
        "license_rejected",
        "invalid_image",
      ],
    },
  },
} as const
