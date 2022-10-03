Object.defineProperty(exports,"__esModule",{value:true});exports.updateUser=exports.updateSong=exports.updatePost=exports.deleteUser=exports.deleteSong=exports.deletePost=exports.createUser=exports.createSong=exports.createPost=void 0;var createUser="\n  mutation CreateUser(\n    $input: CreateUserInput!\n    $condition: ModelUserConditionInput\n  ) {\n    createUser(input: $input, condition: $condition) {\n      id\n      username\n      email\n      imageUri\n      posts {\n        items {\n          id\n          videoUri\n          description\n          userID\n          songID\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";exports.createUser=createUser;var updateUser="\n  mutation UpdateUser(\n    $input: UpdateUserInput!\n    $condition: ModelUserConditionInput\n  ) {\n    updateUser(input: $input, condition: $condition) {\n      id\n      username\n      email\n      imageUri\n      posts {\n        items {\n          id\n          videoUri\n          description\n          userID\n          songID\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";exports.updateUser=updateUser;var deleteUser="\n  mutation DeleteUser(\n    $input: DeleteUserInput!\n    $condition: ModelUserConditionInput\n  ) {\n    deleteUser(input: $input, condition: $condition) {\n      id\n      username\n      email\n      imageUri\n      posts {\n        items {\n          id\n          videoUri\n          description\n          userID\n          songID\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";exports.deleteUser=deleteUser;var createPost="\n  mutation CreatePost(\n    $input: CreatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    createPost(input: $input, condition: $condition) {\n      id\n      videoUri\n      description\n      userID\n      user {\n        id\n        username\n        email\n        imageUri\n        posts {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      songID\n      song {\n        id\n        name\n        imageUri\n        createdAt\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";exports.createPost=createPost;var updatePost="\n  mutation UpdatePost(\n    $input: UpdatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    updatePost(input: $input, condition: $condition) {\n      id\n      videoUri\n      description\n      userID\n      user {\n        id\n        username\n        email\n        imageUri\n        posts {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      songID\n      song {\n        id\n        name\n        imageUri\n        createdAt\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";exports.updatePost=updatePost;var deletePost="\n  mutation DeletePost(\n    $input: DeletePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    deletePost(input: $input, condition: $condition) {\n      id\n      videoUri\n      description\n      userID\n      user {\n        id\n        username\n        email\n        imageUri\n        posts {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      songID\n      song {\n        id\n        name\n        imageUri\n        createdAt\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";exports.deletePost=deletePost;var createSong="\n  mutation CreateSong(\n    $input: CreateSongInput!\n    $condition: ModelSongConditionInput\n  ) {\n    createSong(input: $input, condition: $condition) {\n      id\n      name\n      imageUri\n      createdAt\n      updatedAt\n    }\n  }\n";exports.createSong=createSong;var updateSong="\n  mutation UpdateSong(\n    $input: UpdateSongInput!\n    $condition: ModelSongConditionInput\n  ) {\n    updateSong(input: $input, condition: $condition) {\n      id\n      name\n      imageUri\n      createdAt\n      updatedAt\n    }\n  }\n";exports.updateSong=updateSong;var deleteSong="\n  mutation DeleteSong(\n    $input: DeleteSongInput!\n    $condition: ModelSongConditionInput\n  ) {\n    deleteSong(input: $input, condition: $condition) {\n      id\n      name\n      imageUri\n      createdAt\n      updatedAt\n    }\n  }\n";exports.deleteSong=deleteSong;