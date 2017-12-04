#### Starting a New Feature

1. ```git checkout develop```
2. ```git pull --rebase```
3. ```git checkout -b feature-my-new-feature```
4. Make commits...

#### Finishing a New Feature

1. ```git checkout develop```
2. ```git pull --rebase```
3. ```git checkout feature-my-new-feature```
4. ```git rebase develop``` 
    - Solve any conflicts, then ```git rebase --continue``` until done.
5. ```git log --oneline```
    - Copy the commit hash previous to your first commit on the feature.
6. Squash your commits: ```git rebase -i [paste commit hash]```
    - You'll see a list of your commits next to the word ```pick```
    - Change all ```pick``` to ```s``` *except the top most ```pick```*
    - Save and exit the VIM editor.
7. Create a commit message for your squashed commits
   - Remove all lines not beginning with ```#```.
   - Add a commit message at the top of the file (no ```#``` in front).
   - Save and exit the VIM editor.
8. ```git push origin feature-my-new-feature```

#### Creating a Pull-Request

1. Locate your feature branch in the **Branches** tab in your github repo.
2. Click **Create Pull Request** and leave a short description of the feature you finished.

#### Responding to a Change Request

To update your pull request with changes, simply continue making commits in your feature branch. 

*Do not squash these new commits* (Or, you'll end up with conflicts). Instead just push them to github as normal.
- When you branch has been merged, remove your local feature branch.

#### Solving Pull-Request Conflicts

1. ```git checkout develop```
2. ```git pull --rebase origin develop```

*If there are conflicts with develop use the following command*
- ```git checkout . && git reset --hard origin/develop```

3. ```git checkout feature-my-new-feature```
4. ```git rebase develop```
     - Solve any conflicts, then ```git rebase --continue``` until done.
5. ```git push origin feature-my-new-feature```



Happy Coding! ✌️
