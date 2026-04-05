# Rate Limiting Implementation

This server implements rate limiting using the `express-rate-limit` middleware to protect against abuse and ensure fair usage.

## Configuration

### General Rate Limiter
- **Window**: 15 minutes
- **Max Requests**: 100 per IP
- **Applies to**: All routes (including static files, health checks, etc.)

### API Rate Limiter
- **Window**: 15 minutes
- **Max Requests**: 50 per IP
- **Applies to**: All `/api/*` routes

### Additional Limiters (Available for future use)
- **Strict Limiter**: 10 requests per hour (for sensitive operations)
- **Upload Limiter**: 20 requests per hour (for file uploads)

## Features

- **Standard Headers**: Returns `RateLimit-*` headers with request information
- **Development Bypass**: Automatically skips rate limiting for localhost (`127.0.0.1` or `::1`)
- **Custom Error Messages**: Provides clear feedback when limits are exceeded
- **Retry Information**: Includes retry timing in error responses

## Headers Returned

When rate limiting is active, the following headers are included in responses:

- `RateLimit-Limit`: Maximum number of requests allowed
- `RateLimit-Remaining`: Number of requests remaining in the current window
- `RateLimit-Reset`: Time when the rate limit resets (Unix timestamp)
- `Retry-After`: Seconds until the rate limit resets (when limit exceeded)

## Error Response Format

When rate limit is exceeded:

```json
{
  "error": "Too many requests from this IP, please try again later.",
  "retryAfter": "15 minutes"
}
```

## Usage in Code

```typescript
import { generalLimiter, apiLimiter, strictLimiter } from './middleware/rateLimiter';

// Apply to specific routes
app.use('/api/sensitive', strictLimiter, sensitiveRouter);

// Or apply globally
app.use(generalLimiter);
```

## Monitoring

Rate limiting status can be monitored through the response headers or by checking server logs for rate limit violations.