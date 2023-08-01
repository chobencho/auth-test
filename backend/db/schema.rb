# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_01_134443) do
  create_table "board_comments", force: :cascade do |t|
    t.integer "board_id", null: false
    t.string "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "board_likes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "board_researchtag_taggings", force: :cascade do |t|
    t.integer "board_id", null: false
    t.integer "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "board_researchtags", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "boards", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.string "image"
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "check_ages", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "check_age", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
  end

  create_table "communities", force: :cascade do |t|
    t.integer "category_id"
    t.string "title"
    t.string "body"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "community_categories", force: :cascade do |t|
    t.string "community_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "community_comments", force: :cascade do |t|
    t.integer "community_id"
    t.integer "user_id"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
  end

  create_table "community_users", force: :cascade do |t|
    t.integer "community_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genders", force: :cascade do |t|
    t.string "gender_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "grades", force: :cascade do |t|
    t.string "grade_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hobbies", force: :cascade do |t|
    t.string "hobby_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "information", force: :cascade do |t|
    t.string "title"
    t.string "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interests", force: :cascade do |t|
    t.string "interest_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.integer "room_id", null: false
    t.integer "user_id", null: false
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
  end

  create_table "prefectures", force: :cascade do |t|
    t.string "prefecture_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "room_members", force: :cascade do |t|
    t.integer "room_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.integer "room_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.string "subject_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_hobbies", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "hobby_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_interests", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "interest_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_researchtag_taggings", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "tag_name"
  end

  create_table "user_researchtags", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name", default: "NO NAME", null: false
    t.string "image", default: "no-image.jpg", null: false
    t.string "email"
    t.string "body", default: "よろしくお願いします！", null: false
    t.integer "age", default: 99, null: false
    t.integer "gender_id", default: 1, null: false
    t.integer "prefecture_id", default: 1, null: false
    t.integer "grade_id", default: 1, null: false
    t.integer "subject_id", default: 1, null: false
    t.integer "hobby_id_1", default: 1
    t.integer "hobby_id_2", default: 1
    t.integer "hobby_id_3", default: 1
    t.integer "hobby_id_4", default: 1
    t.integer "hobby_id_5", default: 1
    t.integer "interest_id_1", default: 1
    t.integer "interest_id_2", default: 1
    t.integer "interest_id_3", default: 1
    t.text "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

end
