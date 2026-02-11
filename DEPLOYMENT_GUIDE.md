# LLM Baithak - Complete Deployment Guide

Deploy LLM Baithak on **FREE** platforms for testing/demo purposes.

---

## 📋 Prerequisites

### Accounts Needed (All FREE):
1. **GitHub** - https://github.com/signup (to host code)
2. **Render** - https://render.com/register (backend hosting)
3. **Vercel** - https://vercel.com/signup (frontend hosting)
4. **OpenRouter** - https://openrouter.ai/keys (API key - free tier available)

---

## 🚀 Deployment Steps

### Step 1: Prepare Your Code

#### 1.1 Add All Files to Git
```bash
cd /home/e/Desktop/Ehsan/llm-council

# Add all new files
git add .

# Commit the changes
git commit -m "Add deployment configuration and environment variable support"
```

#### 1.2 Create GitHub Repository & Push
1. Go to https://github.com/new
2. Create a new repository named `llm-baithak`
3. Run these commands:

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/llm-baithak.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy Backend on Render.com

#### 2.1 Go to Render Dashboard
- Visit: https://dashboard.render.com/

#### 2.2 Create New Web Service
1. Click **"New +"** button
2. Select **"Web Service"**

#### 2.3 Connect GitHub
1. Click **"Connect GitHub"**
2. Authorize Render to access your GitHub
3. Find and select `llm-baithak` repository

#### 2.4 Configure the Service

Fill in these values:

| Field | Value |
|-------|-------|
| **Name** | `llm-baithak-backend` |
| **Branch** | `main` |
| **Root Directory** | `.` |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `python -m uvicorn backend.main:app --host 0.0.0.0 --port $PORT` |

#### 2.5 Add Environment Variable
1. Click **"Advanced"** button
2. Find **"Environment Variables"** section
3. Add new variable:
   - **Key:** `OPENROUTER_API_KEY`
   - **Value:** Your OpenRouter API key (get from https://openrouter.ai/keys)

#### 2.6 Deploy
1. Click **"Create Web Service"** button
2. Wait 2-3 minutes for deployment
3. Once deployed, you'll see a URL like: `https://llm-baithak-backend-xxxx.onrender.com`
4. **COPY THIS URL** - you'll need it for the frontend

#### 2.7 Verify Backend
- Add `/api/conversations` to your backend URL
- Example: `https://llm-baithak-backend-xxxx.onrender.com/api/conversations`
- Visit in browser - should show `[]` (empty list)

---

### Step 3: Deploy Frontend on Vercel.com

#### 3.1 Go to Vercel Dashboard
- Visit: https://vercel.com/dashboard

#### 3.2 Create New Project
1. Click **"Add New..."** button
2. Select **"Project"**

#### 3.3 Import GitHub Repository
1. Click **"Import Git Repository"**
2. Find and select `llm-baithak`
3. Click **"Import"**

#### 3.4 Configure Project

Vercel will auto-detect most settings. Verify/adjust these:

| Field | Value |
|-------|-------|
| **Framework Preset** | `Vite` |
| **Root Directory** | `frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

#### 3.5 Add Environment Variable
1. Find **"Environment Variables"** section
2. Click **"Add New"**
3. Add variable:
   - **Key:** `VITE_API_URL`
   - **Value:** Your Render backend URL (e.g., `https://llm-baithak-backend-xxxx.onrender.com`)
4. Click **"Save"**

#### 3.6 Deploy
1. Click **"Deploy"** button
2. Wait 1-2 minutes for deployment
3. Once deployed, you'll see a URL like: `https://llm-baithak-xxxx.vercel.app`
4. Visit this URL - your app should be live! 🎉

---

## 📝 Important Notes

### Free Tier Limitations

**Render.com (Backend):**
- ✅ Free forever
- ✅ 512MB RAM
- ✅ 750 hours/month (enough for testing)
- ⚠️ Spins down after 15 min of inactivity (takes ~30 sec to wake up)
- ⚠️ No persistent storage (conversations will reset on redeploy)

**Vercel.com (Frontend):**
- ✅ Free forever
- ✅ Unlimited bandwidth
- ✅ Automatic HTTPS
- ✅ 100GB bandwidth per month

### For Production/Demo

If you want **persistent conversations** across deployments, you'll need:

1. **Render PostgreSQL (Free tier)** - Add in Render dashboard
2. Update `backend/storage.py` to use PostgreSQL instead of JSON files
3. Add `DATABASE_URL` environment variable

---

## 🧪 Testing Your Deployment

### 1. Test Backend Health
```bash
# Test backend API
curl https://YOUR-BACKEND-URL.onrender.com/api/conversations
# Should return: []
```

### 2. Test Frontend
1. Visit your Vercel URL
2. Click "Get Started"
3. Send a message
4. Should work just like local development!

---

## 🔧 Troubleshooting

### Backend Not Responding
- Check Render dashboard logs
- Verify OPENROUTER_API_KEY is set correctly
- Make sure you pushed all code to GitHub

### Frontend Can't Connect to Backend
- Verify `VITE_API_URL` is set in Vercel
- Check browser console for CORS errors
- Make sure backend is deployed and running

### Conversations Not Persisting
- Normal on free tier (no persistent storage)
- Consider adding PostgreSQL for production

---

## 🎯 Quick Summary Commands

```bash
# 1. Push to GitHub
git add .
git commit -m "Deployment ready"
git push origin main

# 2. Deploy on Render
# Go to https://dashboard.render.com/
# New → Web Service → Connect GitHub → Deploy

# 3. Deploy on Vercel
# Go to https://vercel.com/dashboard
# Add New → Import GitHub → Configure → Deploy

# 4. Test
# Visit your Vercel URL and enjoy! 🚀
```

---

## 📞 Support

If you face issues:
1. Check Render logs: https://dashboard.render.com/
2. Check Vercel logs: https://vercel.com/dashboard
3. Check browser console (F12)

---

## 🎉 Congratulations!

Your LLM Baithak is now live and free to use for testing!
- **Backend:** Render.com (Free)
- **Frontend:** Vercel.com (Free)
- **API:** OpenRouter (Free tier available)

Share your Vercel URL with friends and let them try your AI council! 🚀
