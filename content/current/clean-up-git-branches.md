# Clean up old git branches

After working on a [github](github.com) repository for a while, chances are high the number of branches that repository has is large. That number keeps on growing, too! Time for some housekeeping to reduce that number. I’m considering the branch named “master” to be the default one. Likewise, the remote named “origin” is treated as the place where the repository lives on the internet. In my case, [github](github.com) The code snippets are meant to be ran in the root of the folder which is a git repository. Start off navigating to the repository you want to clean and switch to the “master” branch.

```bash
git checkout master
```

If this repository has a remote, make sure your local version is up to date.

```bash
git pull
```

## <a href="#overview-of-existing-branches"><svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a> <span id="overview-of-existing-branches">Overview of existing branches</span>

Before you get started deleting branches, let’s view which one there are.

To list all local branches:

```bash
git branch
```

To list all remote branches:

```bash
git brance -r
```

To list all branches (local and remote):

```bash
git brance -a
```

A picture of all branches in an example repository.

!['photo'](photo.jpeg)

Not every branch that was listed above should be deleted. The branches that already got merged are probably a good candidate to clean out.</p>

List all local merged branches.

```bash
git branch --merged
```

List all local unmerged branches.

```bash
git branch --no-merged
```

List all remote merged branches.</p>

```bash
git branch -r --merged
```

List all remote unmerged branches.

```bash
git branch -r --no-merged
```

## <a href="deleting-local-branches"><svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a> <span id="deleting-local-branches">Deleting local branches</span>

### <a href="deleting-a-single-local-branch"><svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a> <span id="deleting-a-single-local-branch">Deleting a single local branch</span>

```bash
git branch -d [branchname]

```

In my example project I could delete the branch named `lint` with

```bash
git branch -d lint
```

An important note is that the `lint` branch has already been **_merged_**. If it wasn’t, running that command would throw an error. Good thing too! Unmerged branches could hold important work. If you are sure you want to delete an **_unmerged_** branch:

```bash
git branch -D [branch]
```

In my example project I could delete the unmerged branch named`fauna` with

```bash
git branch -D fauna
```

<h3 id="deleting-many-local-branches-at-once" class="css-1slwemc"><a href="#deleting-many-local-branches-at-once" class="linkTag css-zeggay"><svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path> <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a>Deleting many local branches at once</h3>

Deleting branches one by one gets boring quickly. We’re developers, we try not to do repetitive work when we can automate it!
And we can, by piping the output from one command into another.
To delete all merged local branches:

<div class="css-1krm6gs"><pre class="language-sh prism-code language-bash css-0"><div class="token-line"><span class="token function">git</span><span class="token plain"> branch --merged </span><span class="token operator">|</span><span class="token plain"> </span><span class="token function">egrep</span><span class="token plain"> -v </span><span class="token string">"(^\*|master|dev)"</span><span class="token plain"> </span><span class="token operator">|</span><span class="token plain"> </span><span class="token function">xargs</span><span class="token plain"> </span><span class="token function">git</span><span class="token plain"> branch -d</span></div></pre></div>

Let’s break it down.
The output from a command is “piped into” the next command with the <code class="css-b4nh06">|</code>. It then serves as the input for the command after the <code class="css-b4nh06">|</code>.

```bash
git branch --merged</code>: Lists all local branches that have been merged.
```

```bash
egrep -v "(^\*|master|dev)"
```

Excludes the branches named “master” and “dev”

```bash
xargs git branch -d:
```

Deletes every remaining git branch.

<p class="css-0">If you wish to completely clean house and delete unmerged branches, change <code class="css-b4nh06">--merged</code> to <code class="css-b4nh06">-no--merged</code> and change the lowercase <code class="css-b4nh06">-d</code> to the uppercase <code class="css-b4nh06">-D</code>.</p>

<div class="css-1krm6gs"><pre class="language-sh prism-code language-bash css-0"><div class="token-line"><span class="token comment"># DANGER! Only run these if you are sure you want to delete unmerged branches.</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token comment"># delete all local unmerged branches</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token function">git</span><span class="token plain"> branch --no-merged </span><span class="token operator">|</span><span class="token plain"> </span><span class="token function">egrep</span><span class="token plain"> -v </span><span class="token string">"(^\*|master|dev)"</span><span class="token plain"> </span><span class="token operator">|</span><span class="token plain"> </span><span class="token function">xargs</span><span class="token plain"> </span><span class="token function">git</span><span class="token plain"> branch -D</span></div><div class="token-line"><span class="token plain"></span><span class="token comment"># delete all local branches (merged and unmerged).</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token function">git</span><span class="token plain"> branch </span><span class="token operator">|</span><span class="token plain"> </span><span class="token function">egrep</span><span class="token plain"> -v </span><span class="token string">"(^\*|master|dev)"</span><span class="token plain"> </span><span class="token operator">|</span><span class="token plain"> </span><span class="token function">xargs</span><span class="token plain"> </span><span class="token function">git</span><span class="token plain"> branch -D</span></div></pre></div>

## <a href="deleting-remote-branches"><svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><span id="deleting-remote-branches">Deleting remote branches</span>

### <a href="deleting-non-existent-tracking-branches"><svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a> <span id="deleting-non-existent-tracking-branches">Deleting non-existent tracking branches</span>

You might have branches locally that have since been deleted remotely.

```bash
git remote prune [remote] --dry-run

```

This command will list all branches that were set up to follow remote branches if that remote branch has been deleted. To delete the branches it listed, leave off the `--dry-run`
In my example project with the single remote named 'origin' that becomes

```bash
git remote prune origin
```

That deleted the branches `remotes/origin/apollo-frontend` and some others for me. Those were deleted on GitHub, but not locally.

### <a href="deleting-a-single-remote-branch"><svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a> <span id="deleting-a-single-remote-branch">Deleting a single remote branch</span>

```bash
git push [remote] --delete [branch]
```

In my example project I could delete the branch `remotes/origin/lint`

```bash
git push origin --delete lint
```

This will work for both merged and unmerged branches, but only for branches you own!

### <a href="deleting-many-remote-branches-at-once"><svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a> <span id="deleting-a-single-remote-branch">Deleting many remote branches at once</span>

To delete all merged remote branches:

<!-- <pre class="language-sh prism-code language-bash css-0"><div class="token-line"><span class="token function">git</span><span class="token plain"> branch -r --merged </span><span class="token operator">|</span><span class="token plain"> </span><span class="token function">egrep</span><span class="token plain"> -v </span><span class="token string">"(^\*|master|dev)"</span><span class="token plain"> </span><span class="token operator">|</span><span class="token plain"> </span><span class="token function">sed</span><span class="token plain"> </span><span class="token string">'s/origin\///'</span><span class="token plain"> </span><span class="token operator">|</span><span class="token plain"> </span><span class="token function">xargs</span><span class="token plain"> -n </span><span class="token number">1</span><span class="token plain"> </span>```git push origin --delete``` -->

Let’s break it down.
The output from a command is “piped into” the next command with the `|`. It then serves as the input for the command after the `|`

Lists all remote branches that have been merged:

```bash
git branch -r --merged
```

Excludes the branches named 'master' and 'dev':

```bash
egrep -v '(^\*|master|dev)'
```

Return strings of the form 'origin/[branch]'. This filters the 'origin/' out:

```bash
sed 's/origin\///'
```

Delete every remaining git branch:

```bash
xargs -n 1 git push origin --delete
```

Like with local branches, if you wish to completely clean house and delete unmerged branches, change `--merged` to `--no-merged`

```bash
# DANGER! Only run these if you are sure you want to delete unmerged branches.

# delete all remote (unmerged) branches
git branch -r --merged | egrep -v '(^\*|master|dev)' | sed 's/origin\///' | xargs -n 1 git push origin --delete

# delete all remote branches (merged and unmerged).
git branch -r | egrep -v '(^\*|master|dev)' sed 's/origin\///' | xargs -n 1

git push origin --delete
```
