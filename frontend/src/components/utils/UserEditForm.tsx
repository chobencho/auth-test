import React, { useState, useEffect, useCallback } from "react";
import { editUserData } from "lib/api/user";
import { UserData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { useParams } from "react-router-dom";
import Gender from "common/gender";
import Prefectures from "common/prefecture";
import Grade from "common/grade";
import Subject from "common/subject";
import Interest from "common/interest";
import Hobby from "common/hobby";

import { makeStyles, Theme } from "@material-ui/core/styles";

interface UserEditFormProps {
  handleGetUserData: Function;
  handleGetUserHobbyData: Function;
  handleGetUserInterestData: Function;
  handleGetUserResearchTagData: Function;
  userData: UserData;
  userHobbyData: UserHobbyData[];
  userInterestData: UserInterestData[];
  userResearchTagData: UserTagData[];
}

const useStyles = makeStyles((theme: Theme) => ({
  checkBox: {
    display: "none",
  },
  checkBoxChecked: {
    outline: "solid 3px red",
  },
}));

const UserEditForm = ({
  handleGetUserData,
  handleGetUserHobbyData,
  handleGetUserInterestData,
  handleGetUserResearchTagData,
  userData,
  userHobbyData,
  userInterestData,
  userResearchTagData,
}: UserEditFormProps) => {
  const [name, setName] = useState<string>(userData.name || "");
  const [body, setBody] = useState<string>(userData.body || "");
  const [age, setAge] = useState<string>(userData.age || "");

  // 現在のtagsステートとtagステートの初期値を設定します
  // const [tags, setTags] = useState<string[]>(userData.tags || []);
  const [tags, setTags] = useState<string[]>([
    ...userResearchTagData.map((tag) => tag.tagName),
  ]);

  const [tag, setTag] = useState<string>("");

  const [gender, setGender] = useState<string>(
    userData.genderId ? userData.genderId.toString() : ""
  );
  const [grade, setGrade] = useState<string>(
    userData.gradeId ? userData.gradeId.toString() : ""
  );
  const [subject, setSubject] = useState<string>(
    userData.subjectId ? userData.subjectId.toString() : ""
  );
  const [prefecture, setPrefecture] = useState<string>(
    userData.prefectureId ? userData.prefectureId.toString() : ""
  );

  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");

  const { id } = useParams<{ id: string }>();

  const [showInterestOptions, setShowInterestOptions] = useState(false);
  const [showHobbyOptions, setShowHobbyOptions] = useState(false);

  type HobbyOption = [string, string, string];
  const classes = useStyles();
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]); // string[] 型を指定

  const MAX_HOBBY_SELECTION = 5; // 最大選択可能なホビーの数

  const handleHobbySelection = (hobbyValue: string) => {
    setSelectedHobbies((prevSelectedHobbies) => {
      if (prevSelectedHobbies.includes(hobbyValue)) {
        // チェックを外す場合
        return prevSelectedHobbies.filter((value) => value !== hobbyValue);
      } else {
        // チェックを付ける場合
        if (prevSelectedHobbies.length < MAX_HOBBY_SELECTION) {
          return [...prevSelectedHobbies, hobbyValue];
        } else {
          // 選択可能なホビーの数を超えた場合、現在の選択を維持
          return prevSelectedHobbies;
        }
      }
    });
  };

  type InterestOption = [string, string, string];
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]); // string[] 型を指定

  const MAX_INTEREST_SELECTION = 3; // 最大選択可能なホビーの数

  const handleInterestSelection = (interestValue: string) => {
    setSelectedInterests((prevSelectedInterests) => {
      if (prevSelectedInterests.includes(interestValue)) {
        // チェックを外す場合
        return prevSelectedInterests.filter((value) => value !== interestValue);
      } else {
        // チェックを付ける場合
        if (prevSelectedInterests.length < MAX_INTEREST_SELECTION) {
          return [...prevSelectedInterests, interestValue];
        } else {
          // 選択可能なホビーの数を超えた場合、現在の選択を維持
          return prevSelectedInterests;
        }
      }
    });
  };

  // 画像アップロード機能
  const uploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file);
  }, []);

  // プレビュー機能
  const previewImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(window.URL.createObjectURL(file));
    } else {
      setPreview(""); // ファイルが選択されていない場合はプレビューをクリア
    }
  }, []);

  // プレビュークリア機能
  const handleClearPreview = () => {
    setPreview("");
    // プレビューをクリアすると同時に、inputタグの内容もクリア
    const fileInput = document.getElementById(
      "icon-button-file"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // FormData形式でデータを作成
  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("name", name);
    if (image) formData.append("image", image);
    formData.append("body", body);
    formData.append("age", age);
    formData.append("gender_id", gender);
    formData.append("grade_id", grade);
    formData.append("prefecture_id", prefecture);
    formData.append("subject_id", subject);

    // タグをデータ登録用に配列に格納する
    // なにもタグがない場合は、データを送信しない
    if (tags.length !== 0) {
      tags.forEach((tagValue) => {
        formData.append("tags[]", tagValue);
      });
    }

    // チェックした趣味をデータ登録用に配列に格納する
    // なにもチェックしてない場合は、データを送信しない
    if (selectedInterests.length != 0) {
      selectedInterests.forEach((interestValue) => {
        formData.append(`interest_ids[]`, interestValue);
      });
    }

    // チェックした趣味をデータ登録用に配列に格納する
    // なにもチェックしてない場合は、データを送信しない
    if (selectedHobbies.length != 0) {
      selectedHobbies.forEach((hobbyValue) => {
        formData.append(`hobby_ids[]`, hobbyValue);
      });
    }

    return formData;
  };

  // ユーザ情報を変更する
  const handleEditUserData = async (e: React.FormEvent<HTMLFormElement>) => {
    // デフォルト操作を拒否するメソッド(ページ再読み込みを拒否する)
    e.preventDefault();

    const data = createFormData();

    await editUserData(id, data).then(() => {
      handleGetUserData();
      handleGetUserHobbyData();
      handleGetUserInterestData();
      handleGetUserResearchTagData();
    });

    handleClearPreview();
  };

  // 興味オプションの表示を切り替えるボタンが押されたときの処理
  const handleToggleInterestOptions = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowInterestOptions(
      (prevShowInterestOptions) => !prevShowInterestOptions
    );
  };

  // 興味オプションの表示を切り替えるボタンが押されたときの処理
  const handleToggleHobbyOptions = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowHobbyOptions((prevShowHobbyOptions) => !prevShowHobbyOptions);
  };

  const handleAddTag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // デフォルト操作を拒否するメソッド(ページ再読み込みを拒否する)
    e.preventDefault();
    if (tag.trim() !== "") {
      // 新しいタグを追加する場合は、元のtagsステートには影響を与えないようにします
      setTags((prevTags) => [...prevTags, tag.trim()]);
      setTag(""); // タグを追加したら入力フィールドをクリア
    }
  };

  // 新しくhandleRemoveTag関数を追加します
  const handleRemoveTag = (tagToRemove: string) => {
    // タグを取り除くために、現在のtagsステートから対象のタグをフィルタリングします
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <form onSubmit={handleEditUserData}>
        <div className="border m-2 p-2">
          <b>名前</b>
          <input
            type="text"
            placeholder="name"
            className="border p-2 m-2"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="border m-2 p-2">
          <b>研究タグ</b>
          <div className="flex">
            <input
              type="text"
              value={tag}
              className="border p-2 m-2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTag(e.target.value);
              }}
            />
            <button
              className="border text-white bg-gray-600 p-2 m-2"
              onClick={handleAddTag}
            >
              追加
            </button>
          </div>
        </div>

        {/* 追加されたタグを表示 */}
        <div className="border m-2 p-2 flex flex-wrap">
          <b>追加されたタグ：</b>

          {tags.map((tag, index) => (
            <p key={index} className="border p-1 m-1 bg-blue-100 w-1/8">
              {tag}
              <button
                className="my-1 mx-2 px-2 text-xl bg-gray-600 text-white"
                onClick={() => handleRemoveTag(tag)}
              >
                ×
              </button>
            </p>
          ))}
        </div>

        <div className="border m-2 p-2">
          <b>プロフィール画像</b>
          <input
            id="icon-button-file"
            type="file"
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              uploadImage(e);
              previewImage(e);
            }}
          />
          <label
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            htmlFor="icon-button-file"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  写真のアップロードはここをクリック
                </span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          </label>
        </div>

        <div className="border m-2 p-2">
          <b>自己紹介文</b>
          <textarea
            placeholder="introduce"
            // className→whitespace-pre-wrapで改行している
            className="border p-2 m-2 w-full whitespace-pre-wrap h-40"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="border m-2 p-2">
          <b>年齢</b>
          <input
            type="number"
            placeholder="age"
            className="border p-2 m-2"
            value={age}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div className="border m-2 p-2">
          <b>性別</b>
          <select
            className="border m-2 p-2"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            {Gender.GEN_OPTIONS.map((option) => {
              return <option value={option[0]}>{option[1]}</option>;
            })}
          </select>
        </div>

        <div className="border m-2 p-2">
          <b>学年</b>
          <select
            className="border m-2 p-2"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            {Grade.GRD_OPTIONS.map((option) => {
              return <option value={option[0]}>{option[1]}</option>;
            })}
          </select>
        </div>

        <div className="border m-2 p-2">
          <b>居住地</b>
          <select
            className="border m-2 p-2"
            value={prefecture}
            onChange={(e) => setPrefecture(e.target.value)}
          >
            {Prefectures.PREF_OPTIONS.map((option) => {
              return <option value={option[0]}>{option[1]}</option>;
            })}
          </select>
        </div>

        <div className="border m-2 p-2">
          <b>専攻</b>
          <select
            className="border m-2 p-2"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            {Subject.SUB_OPTIONS.map((option) => {
              return <option value={option[0]}>{option[1]}</option>;
            })}
          </select>
        </div>

        {/* 興味オプションの表示を切り替えるボタン */}
        <button
          className="border bg-gray-600 text-white rounded py-1 px-2"
          onClick={handleToggleInterestOptions}
        >
          {showInterestOptions ? "興味分野一覧を隠す" : "興味分野一覧を見る"}
        </button>

        {/* 興味オプションを表示する部分 */}
        {showInterestOptions && (
          <div>
            <b>興味</b>
            <div className="w-full flex flex-wrap border m-2">
              {Interest.INT_OPTIONS.map((option: (string | number)[]) => {
                if (option.length !== 3) return null; // オプションが3つの要素を持たない場合はnullを返す

                const [value, label, image] = option as InterestOption; // オプションの型をInterestOptionに変換
                const isChecked = selectedInterests.includes(value);

                return (
                  <div key={value} className="w-1/2 border p-2">
                    <label className="flex">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleInterestSelection(value)}
                      />
                      <option value={value} className="text-center text-sm">
                        {label}
                      </option>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 興味オプションの表示を切り替えるボタン */}
        <button
          className="border bg-gray-600 text-white rounded py-1 px-2"
          onClick={handleToggleHobbyOptions}
        >
          {showHobbyOptions ? "趣味一覧を隠す" : "趣味一覧を見る"}
        </button>

        {/* 興味オプションを表示する部分 */}
        {showHobbyOptions && (
          <div>
            <b>趣味</b>
            <div className="w-full flex flex-wrap border m-2">
              {Hobby.HOB_OPTIONS.map((option: (string | number)[]) => {
                if (option.length !== 3) return null; // オプションが3つの要素を持たない場合はnullを返す

                const [value, label, image] = option as HobbyOption; // オプションの型をHobbyOptionに変換
                const isChecked = selectedHobbies.includes(value);

                return (
                  <div key={value} className="w-1/5 border p-2">
                    <label>
                      <input
                        type="checkbox"
                        className={`${classes.checkBox}`}
                        checked={isChecked}
                        onChange={() => handleHobbySelection(value)}
                      />
                      <img
                        src={`${process.env.PUBLIC_URL}/images/hobby/${image}`}
                        className={` ${
                          isChecked ? classes.checkBoxChecked : ""
                        }`}
                        alt=""
                      />
                      <option value={value} className="text-center text-sm">
                        {label}
                      </option>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <button type="submit" className="border text-white bg-gray-600 p-2 m-2">
          変更する
        </button>
      </form>

      {preview ? (
        <div>
          <button
            onClick={() => handleClearPreview()}
            className="border text-2xl text-white bg-gray-600 px-3 py-1"
          >
            ×
          </button>
          <img src={preview} alt="preview img" className="border" />
        </div>
      ) : null}
    </>
  );
};

export default UserEditForm;
